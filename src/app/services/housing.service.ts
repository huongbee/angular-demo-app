import { Injectable } from '@angular/core';
import { Housinglocation } from '../interfaces/housinglocation';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}
  readonly url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const result: any = await axios(this.url);
    console.log('Full data of axios request:');
    console.log(result);
    return result.data || [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<Housinglocation | undefined> {
    // use fetch() for client and use axios() for both of client and server
    const result: any = await axios(`${this.url}/${id}`);
    return result.data ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
