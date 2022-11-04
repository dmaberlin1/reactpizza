import styles from './Search.module.css'

export const Search=({searchValue,setSearchValue})=>{
    return(
      <div className={styles.root}>
          <svg
            className={styles.icon}
            width="49"
                height="49"
                 id="Glyph" version="1.1" viewBox="0 0 45 16"  xmlns="http://www.w3.org/2000/svg" ><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_"/></svg>
      <input
        value={searchValue}
        onChange={(event)=> setSearchValue(event.target.value)}
             placeholder='Поиск пиццы..'
             className={styles.input}
      />
          {searchValue &&   (  <svg  onClick={()=>setSearchValue('')} className={styles.iconClose} enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px"  xmlns="http://www.w3.org/2000/svg" ><polyline fill="none" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF"/><polyline fill="none" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF"  /><polyline fill="none" points="   661,156 653,162 653,156  " stroke="#FFFFFF"  /><path d="M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409   L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z"/><path d="M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15   c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292   s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292   c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z"/></svg>)}
      </div>

          )
}