export const config = {
  //'username': process.env.POSTGRES_USERNAME,
  //'password': process.env.POSTGRES_PASSWORD,
  //'database': process.env.POSTGRES_DB,
  //'host': process.env.POSTGRES_HOST,
  'username': 'microserv1',
  'password': 'Microserv0001',
  'host': 'microserv-database-1.cegw28yni2ig.us-east-1.rds.amazonaws.com',
  'database': 'postgres',
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': 'default',
  'aws_media_bucket': 'arn:aws:s3:::microservbucket',
  'url': 'http://localhost:8100',
  'jwt': {
    'secret': 'hello',
  },
};
