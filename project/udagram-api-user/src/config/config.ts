export const config = {
  //'username': process.env.POSTGRES_USERNAME,
  //'password': process.env.POSTGRES_PASSWORD,
  //'database': process.env.POSTGRES_DB,
  //'host': process.env.POSTGRES_HOST,
  'username': 'tau_db_user1',
  'password': 'Taudb!0001',
  'host': 'tau-poc-db.cvajooc0iqsc.us-east-2.rds.amazonaws.com',
  'database': 'postgres',
  'dialect': 'postgres',
  'aws_region': 'us-east-2',
  'aws_profile': 'default',
  'aws_media_bucket': 'arn:aws:s3:::mymicrobucket',
  'url': 'http://localhost:8100',
  'jwt': {
    'secret': 'hello',
  },
};
