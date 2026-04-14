import styles from './MapLegend.module.scss'

type LegendItem ={
    fillColor:string;
    text:string;
}

type MapLegendProps ={
    legendItems:LegendItem[];
}

const getLegndItemOffSet= (legendItems:MapLegendProps['legendItems'], index:number, currentValue:number):number=>{
    if(index<=0) return currentValue;
    currentValue = currentValue + (legendItems[index-1].text.length * 7.6) + 17
    index = index -1;
    return getLegndItemOffSet(legendItems, index, currentValue)
}

const MapLegend =({legendItems}:MapLegendProps)=>(
    <div className={styles.maplegend}>
        <svg height={'35px'} width={getLegndItemOffSet(legendItems,legendItems.length,0)} className={styles.fireMapLegend} >
            <g>
                {
                    legendItems.map((item, i)=>(
                        <g transform={`translate(${getLegndItemOffSet(legendItems,i,0)}, ${35/4})`}><rect x={0} y={0}  width={10} height={10} fill={item.fillColor}></rect><text x={15} y={10} color={'black'}>{item.text}</text></g>
                    ))
                }
            </g>
        </svg>
    </div>
)

export default MapLegend;