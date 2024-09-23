import CityInterface from "@/types/city/CityInterface";

export default interface UserInterface {
  name: string,
  email: string,
  city: CityInterface,
}