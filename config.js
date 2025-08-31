module.exports = {
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || throw new Error('Missing AWS_ACCESS_KEY_ID'),
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || throw new Error('Missing AWS_SECRET_ACCESS_KEY'),
    region: process.env.AWS_REGION || throw new Error('Missing AWS_REGION')
  },
  gcp: {
    projectId: process.env.GCP_PROJECT_ID || throw new Error('Missing GCP_PROJECT_ID'),
    keyFilename: process.env.GCP_KEY_FILE || throw new Error('Missing GCP_KEY_FILE')
  },
  azure: {
    clientId: process.env.AZURE_CLIENT_ID || throw new Error('Missing AZURE_CLIENT_ID'),
    clientSecret: process.env.AZURE_CLIENT_SECRET || throw new Error('Missing AZURE_CLIENT_SECRET'),
    tenantId: process.env.AZURE_TENANT_ID || throw new Error('Missing AZURE_TENANT_ID')
  },
  ibm: {
    apiKey: process.env.IBM_API_KEY || throw new Error('Missing IBM_API_KEY'),
    resourceGroup: process.env.IBM_RESOURCE_GROUP || throw new Error('Missing IBM_RESOURCE_GROUP'),
    region: process.env.IBM_REGION || throw new Error('Missing IBM_REGION')
  }
};