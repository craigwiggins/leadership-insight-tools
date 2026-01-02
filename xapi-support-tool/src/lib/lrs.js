// src/lib/lrs.js

const LRS_STORAGE_KEY = 'xapi-pst-lrs';

/**
 * Saves a statement to the mock LRS (localStorage).
 * @param {object} statement - The xAPI statement to save.
 */
export const saveStatement = (statement) => {
  try {
    const statements = getStatements();
    statements.push(statement);
    localStorage.setItem(LRS_STORAGE_KEY, JSON.stringify(statements));
    // Dispatch a custom event to notify other parts of the app that a new statement was saved.
    window.dispatchEvent(new CustomEvent('statementSaved', { detail: statement }));
    return true;
  } catch (error) {
    console.error('Error saving statement to mock LRS:', error);
    return false;
  }
};

/**
 * Retrieves all statements from the mock LRS.
 * @returns {Array} - An array of xAPI statements.
 */
export const getStatements = () => {
  try {
    const storedStatements = localStorage.getItem(LRS_STORAGE_KEY);
    return storedStatements ? JSON.parse(storedStatements) : [];
  } catch (error) {
    console.error('Error retrieving statements from mock LRS:', error);
    return [];
  }
};

/**
 * Clears all statements from the mock LRS.
 */
export const clearStatements = () => {
  try {
    localStorage.removeItem(LRS_STORAGE_KEY);
    console.log('Mock LRS cleared.');
  } catch (error) {
    console.error('Error clearing mock LRS:', error);
  }
};
