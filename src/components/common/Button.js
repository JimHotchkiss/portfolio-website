const Button = ({btnIcon, iconText, isButton, handleBtn, dataId, darkMode}) => {

  return (
    <div 
      data-id={dataId}
      onClick={() => handleBtn(dataId)}
      className={isButton ? 'dark-btn' : darkMode ? 'dark-mode-btn' : 'light-btn'}>
      <button 
        className={isButton ? 'light-btn-icon' : 'dark-btn-icon'}
         >
       {btnIcon}
      </button>
      <div>
        <p className="font-light text-xs pt-1">{iconText}</p>
      </div>
    </div>
  
  );
};

export default Button;