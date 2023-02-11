const createRedirectsTable = `
    CREATE TABLE IF NOT EXISTS redirects (
        name TEXT PRIMARY KEY NOT NULL,
        url TEXT NOT NULL
    );
`;

module.exports = createRedirectsTable;
