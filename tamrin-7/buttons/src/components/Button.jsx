import React, { useEffect, useState } from 'react';

const Button = ({ ...prop }) => {
  const [type, setType] = useState(prop.type);
  const [variant, setVariant] = useState(prop.variant);
  const [size, setSize] = useState(prop.size);
  const [onclick, setOnClick] = useState(prop.onClick);
  const [disabled, setDisabled] = useState(prop.disabled);
  const [className, setClassName] = useState(prop.className);
  const [as, setAs] = useState(prop.as);
  const [look, setLook] = useState(prop.look);

  useEffect(() => {
    look ? setLook(look) : setLook('primary');
  }, []);
  useEffect(() => {
    variant ? setVariant(variant) : setVariant('filled');
  }, []);

  useEffect(() => {
    size ? setSize(size) : setSize('medium');
  }, []);

  useEffect(() => {
    type ? setType(type) : setType('button');
  }, []);
  useEffect(() => {
    onclick ? setOnClick(onclick) : setOnClick(null);
  }, []);
  useEffect(() => {
    disabled ? setDisabled(true) : setDisabled(false);
  }, []);
  useEffect(() => {
    as ? setAs(as) : setAs('button');
  }, []);
  useEffect(() => {
    className ? setClassName(className) : setClassName('');
  }, []);

  return (
    <div>
      {as == 'a' ? (
        <a
          href={prop.href}
          target={prop.target}
          disabled={disabled}
          type={type}
          onClick={() => onclick}
          variant={variant}
          className={`${look} ${size} ${className}`}
        >
          {prop.children}
        </a>
      ) : (
        <button
          disabled={disabled}
          type={type}
          onClick={() => onclick}
          variant={variant}
          className={`${look} ${size} ${className}`}
        >
          {prop.children}
        </button>
      )}
    </div>
  );
};

export default Button;
