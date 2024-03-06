
type Vehicles = {
  id?: string,
  image?: string,
  description?: string,
  title?: string,
  category?: string,
  header?: string,
  detailsImage?: string
  diffDuration?: string
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

interface SignupValues {
  email: string;
  password: string;
  cpassword: string;
}

interface user {
  uid?: string,
  email?: string | null,
}