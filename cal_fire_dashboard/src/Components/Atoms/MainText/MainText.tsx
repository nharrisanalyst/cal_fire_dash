import styles from './mainText.module.scss'

export type MainTextProps ={
    lineOne:string
    lineTwo:string
    color:string 
}

const MainText =({lineOne, lineTwo, color}:MainTextProps)=>{


if(!lineOne) return (<div>{'error no text provided'}</div>)

return(
      <div className={styles.mainText} style={{'color':color}}><h1>{lineOne}</h1><h1>{lineTwo}</h1> </div>
)
}

export default MainText;