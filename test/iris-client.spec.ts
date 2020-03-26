import { AlIrisClientInstance } from '../src/index';
import { expect } from 'chai';
import { describe } from 'mocha';
import * as sinon from 'sinon';

let irisClient:AlIrisClientInstance;

beforeEach( () => {
    irisClient = new AlIrisClientInstance();
} );
afterEach(() => {
  sinon.restore();
});
describe('Iris Client Test Suite:', () => {
  describe('when getting aggregations', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(irisClient['client'], 'post');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call post() on the ALClient instance', async () => {
      await irisClient.getAggregationsForFields('1234', {});
      expect(stub.callCount).to.equal(1);
    });
  });
});
