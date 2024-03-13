
type Vehicles = {
  id?: string,
  image?: string,
  description?: string,
  title?: string,
  category?: string,
  header?: string,
  detailsImage?: string
  diffDuration?: string
  pickUp?: string; 
  return?: string;
}

type Categories = {
  title?: string,
  id?: string;
  image?:string,
}

type CarPreview = {
  gasConsumption?: string;
  speed?: string;
  control?: string,
  weight?: string,
  id?: string,
  label?: string,
  image?: string,
}

type history = {
  id?: string;
  image? : string;
  timestamp?: string;
  title?: string;
  pickUp?: string; 
  return?: string; 
  Price?: string;
  uid?: string; 
}

interface SignupValues {
  email: string;
  password: string;
  cpassword: string;
}

interface user {
  uid?: string,
  email?: string | null,
}