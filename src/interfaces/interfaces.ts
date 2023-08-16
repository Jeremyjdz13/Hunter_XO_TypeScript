//User Auth
export interface AuthContextValue {
    currentUser: any;
}

//Dropdown menu
export interface Option {
    value: string;
    label: string;
  }
  
export interface MyComponentProps {
options: Option[];
}

export interface MyComponentState {
selectedOption: Option;
}
  