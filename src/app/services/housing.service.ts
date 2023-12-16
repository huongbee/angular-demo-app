import { Injectable } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}
  readonly url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data: any = await axios(this.url);
    return data || [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<Housinglocation | undefined> {
    // use fetch() for client and use axios() for both of client and server
    const data: any = await axios(`${this.url}/${id}`);
    return data ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
