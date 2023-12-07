const ButtonsInfo = ({
  as,
  variant,
  look,
  size,
  disabled,
  href,
  type,
  target,
  children,
  className,
  onClick,
}) => {};

const LOOKS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  DARK: 'dark',
};

const VARIANTS = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'larg',
};

ButtonsInfo.VARIANTS = VARIANTS;
ButtonsInfo.SIZES = SIZES;
ButtonsInfo.LOOKS = LOOKS;

export default ButtonsInfo;
