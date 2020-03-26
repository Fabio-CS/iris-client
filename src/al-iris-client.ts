/**
 * Module to deal with available Iris Public API endpoints
 */
import { AlApiClient, AlDefaultClient } from '@al/client';

export class AlIrisClientInstance {

  private serviceName = 'iris';
  private version = 'v3';

  /* istanbul ignore next */
  constructor( public client:AlApiClient = AlDefaultClient ) {
  }

  /**
  * Get aggregations for a list of fields
  * POST
  * /iris/v3/:account_id/incident/aggregations
  * "https://api.cloudinsight.alertlogic.com/iris/v3/2/incident/aggregations?size=0"
  */
  async getAggregationsForFields(accountId: string, filterExpression: any, queryParams?: {multi?: boolean, size?: number, metadata?: boolean, raw_totals?: boolean}) {
    const aggregations = await this.client.post({
      account_id: accountId,
      service_name: this.serviceName,
      version: this.version,
      path: '/incident/aggregations',
      params: queryParams,
      data: filterExpression,
    });
    return aggregations;
  }
}
