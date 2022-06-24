const InputsEscenesModal = () => {
  return (
    <div>
      <div class='input-grou my-3 w-50'>
        <input
          type='text'
          className='form-control'
          placeholder='Nombre'
          aria-label='Nombre'
          aria-describedby='basic-addon1'
        />
      </div>
      <div class='input-group my-3 w-50'>
        <input
          type='text'
          className='form-control'
          placeholder='Descripcion'
          aria-label='Descripcion'
          aria-describedby='basic-addon1'
        />
      </div>
    </div>
  );
};

export default InputsEscenesModal;
