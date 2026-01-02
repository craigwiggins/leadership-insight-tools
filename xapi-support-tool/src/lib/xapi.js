import XAPI from '@xapi/xapi';
import { saveStatement } from './lrs';

let _xapi = null; // Module-scoped variable to hold the XAPI instance

export const initializeXAPI = () => {
  if (_xapi) {
    console.warn('XAPI already initialized.');
    return;
  }

  // Basic configuration for the xAPI wrapper.
  _xapi = new XAPI({
    endpoint: 'http://localhost:8080/xapi', // This is a dummy endpoint.
    actor: {
      objectType: 'Agent',
      name: 'Demo User',
      mbox: 'mailto:demouser@example.com',
    },
  });

  // Since we have a mock LRS, we'll override the sendStatement function
  // to save to localStorage instead of sending an HTTP request.
  _xapi.sendStatement = (statement) => {
    // The library automatically adds a UUID and timestamp, which is great.
    saveStatement(statement);
    console.log('Statement sent to mock LRS:', statement);
    return Promise.resolve();
  };
};

// Helper function to get the xapi instance, ensuring it's initialized
const getXAPI = () => {
  if (!_xapi) {
    console.error('XAPI not initialized. Call initializeXAPI() first.');
    // Return a dummy object to prevent further errors if not initialized
    return { sendStatement: () => Promise.resolve() };
  }
  return _xapi;
};


/**
 * Sends a statement indicating the user has focused on a form field.
 * @param {string} fieldId - The ID of the form field.
 * @param {string} fieldName - The human-readable name of the field.
 */
export const sendInteractedStatement = (fieldId, fieldName) => {
  const statement = {
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/interacted',
      display: { 'en-US': 'interacted' },
    },
    object: {
      id: `http://example.com/crm/opportunity/form#${fieldId}`,
      definition: {
        name: { 'en-US': fieldName },
        type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
      },
    },
  };
  return getXAPI().sendStatement(statement);
};

/**
 * Sends a statement indicating the user chose an option.
 * @param {string} fieldId - The ID of the field (e.g., dropdown).
 * @param {string} fieldName - The human-readable name of the field.
 * @param {string} choice - The value the user selected.
 */
export const sendSelectedStatement = (fieldId, fieldName, choice) => {
  const statement = {
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/chose',
      display: { 'en-US': 'chose' }
    },
    object: {
      id: `http://example.com/crm/opportunity/form#${fieldId}`,
      definition: {
        name: { 'en-US': fieldName },
        type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
      },
    },
    result: {
      response: choice
    }
  };
  return getXAPI().sendStatement(statement);
};

/**
 * Sends a statement indicating the user might be struggling.
 * @param {string} fieldId - The ID of the form field.
 * @param {string} fieldName - The human-readable name of the field.
 */
export const sendStruggledStatement = (fieldId, fieldName) => {
  const statement = {
    verb: {
      id: 'http://example.com/verbs/struggled',
      display: { 'en-US': 'struggled' },
    },
    object: {
      id: `http://example.com/crm/opportunity/form#${fieldId}`,
      definition: {
        name: { 'en-US': fieldName },
        type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
      },
    },
  };
  return getXAPI().sendStatement(statement);
};

