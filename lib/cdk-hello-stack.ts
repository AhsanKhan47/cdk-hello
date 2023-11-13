import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkHelloStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new s3.Bucket(this, "myBucket", {
      versioned: true
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkHelloQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
