import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda"

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, "lambdaFunction", {
      functionName: "cdk-lambda",
      code: new lambda.AssetCode('src'),
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: 128
    })
  }
}
