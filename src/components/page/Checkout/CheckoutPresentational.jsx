import styles from "./styles.module.css";

const CheckoutPresentational = ({
  handleSubmit,
  handleOnChange,
  totalPrice,
  navigate,
  orderId,
  values,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {orderId ? (
          <>
            <h3>Tu compra ha sido realizada con exito</h3>
            <p>
              Aqui esta tu identificador de compra: {orderId}. No lo pierdas
            </p>
            <button onClick={() => navigate("/")} style={{ width: "100%" }}>
              Voler al inicio
            </button>
          </>
        ) : (
          <>
            <p>Total: {totalPrice}</p>
            <p>
              Para finalizar esta compra rellena el siguiente formulario con tus
              datos
            </p>
            <input
              onChange={(event) => handleOnChange(event)}
              type="text"
              value={values.name}
              placeholder="Tu nombre"
              name="name"
            />
            <input
              onChange={(event) => handleOnChange(event)}
              type="text"
              value={values.surname}
              placeholder="Tu apellido"
              name="surname"
            />
            <input
              onChange={(event) => handleOnChange(event)}
              type="email"
              value={values.email}
              placeholder="example@email.com"
              name="email"
            />
            <div className={styles.buttonsContainer}>
              <button
                onClick={(event) => handleSubmit(event)}
                style={{ width: "50%" }}
              >
                Finalizar Compra
              </button>
              <button
                onClick={() => navigate("/cart")}
                style={{ width: "50%" }}
              >
                Cancelar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPresentational;
