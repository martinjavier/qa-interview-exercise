import BaseEndpoint from "./base-endpoint";

export default  class UsersEndpoint extends BaseEndpoint {
    constructor(baseUrl: string) {
      super(baseUrl);
      this.setEndpoint(`/users`);
  }   
}
 