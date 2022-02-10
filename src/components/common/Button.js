const Button = ({btnIcon, iconText, isButton, handleBtn, dataId, darkMode}) => {


  // isButton means it's clicked 
  return (
    <div 
      data-id={dataId}
      onClick={() => handleBtn(dataId)}
      className={isButton ? 'light-btn' : darkMode ? 'dark-mode-btn' : 'dark-btn'}>
      <button 
        className={isButton ? 'light-btn-icon' : 'dark-btn-icon' }
         >
           {/* {console.log(darkMode)} */}
       {btnIcon}
      </button>
      <div>
        <p className="font-light text-xs pt-1">{iconText}</p>
      </div>
    </div>
  
  );
};

export default Button;