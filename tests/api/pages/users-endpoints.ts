import BaseEndpoint from "./base-endpoint";
import { fixture } from "../../utils/fixture";
import { getEndpoint, postEndpoint } from "../common/endpoint";

export default  class UsersEndpoint extends BaseEndpoint {
    constructor(baseUrl: string) {
      super(baseUrl);
      this.setEndpoint(`/users`);
    }

    // POST users/register
    async createUser(endpointUrl: string, userData: Record<string, any>) {
      try {
          const response = await fetch(endpointUrl, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
          });
  
          if (response.ok) {
              const data = await response.json();
              console.log('Usuario creado:', data);
          } else {
              console.error('Error al crear el usuario:', response.statusText);
          }
      } catch (error: any) {
          console.error('Error en la solicitud:', error.message);
      }
  }

    // POST users/login
    async loginUser(endpointUrl: string, userData: Record<string, any>) {
      try {
          var endpoint = JSON.stringify(endpointUrl);  
          console.log("endpoint: " + endpoint)
          const response = await fetch(endpointUrl, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
          });

          if (response.ok) {
              const data = await response.json();
              console.log('Usuario logueado:', data);
          } else {
              console.error('Error al loguear el usuario:', response.statusText);
          }
      } catch (error: any) {
          console.error('Error en la solicitud:', error.message);
      }
  }

}
 