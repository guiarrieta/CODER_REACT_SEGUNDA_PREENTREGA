import Button from 'react-bootstrap/Button';

  const ButtonComponent = ({label, bsButtonType, onClickFunction}) => {

  return <Button variant={bsButtonType} onClick={onClickFunction}>{label}</Button>;
};

export default ButtonComponent;

