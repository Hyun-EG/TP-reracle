export interface UserInfoProps {
  children: React.ReactNode;
  name?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string | number) => void;
}