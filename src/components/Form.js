import React from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

import useSelect from "../hooks/useSelect";

const Form = ({ setCategory }) => {
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  //Utilize custom hook
  const [category, SelectNews] = useSelect("general", OPTIONS);

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Buscar noticias por categoría</h2>
          <SelectNews />
          <div className="input-fiel col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Form;
