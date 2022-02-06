const Button = ({btnIcon, iconText, isButton, handleBtn}) => {

  return (
    <div 
      onClick={handleBtn}
      className={isButton ? 'dark-btn' : 'light-btn'}>
      <button 
        className={isButton ? 'light-btn-icon' : 'dark-btn-icon'}
         >
       {btnIcon}
      </button>
      <div>
        <p>{iconText}</p>
      </div>
    </div>
  
  );
};

export default Button;