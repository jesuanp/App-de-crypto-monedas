import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { searchCoins} from '../redux/actions';
import './Tabla.css';

function Tabla({search, search2, searchCoins}){

    useEffect(() => {
        searchCoins()
    }, [])

    return (
        <div className='containers'>
            <div className='containerAll'>
                <div className='container barraArriba'>
                    <div className='nameYnumero'>
                        <div>
                            <p className='numeros'>#</p>
                        </div>
                        <div className='name1'>
                            <p className='textP'>Name crypto</p>
                        </div>
                    </div>
                    <div>
                        <p></p>
                    </div>
                    <div className='current_price'>
                        <p className='textP precios'>Precio actual</p>
                    </div>
                </div>
                {
                    search2.map((e, i) => <div key={i} id={e.id} className='container'>
                        <div className='nameYnumero'>
                            <div>
                                <p className='numeros'>{i + 1}</p>
                            </div>
                            <div className='name'>
                                <img src={e.image} alt="imagen de crypto moneda"  className='imgCrypto'/>
                                <p className='textP'>{e.name}</p>
                                <p className='textP simbolo'>{e.symbol.toUpperCase()}</p>
                            </div>
                        </div>
                        <div>
                            <p className={e.price_change_percentage_24h > 0 ? 'verde' : 'rojo'}>{e.price_change_percentage_24h} %</p>
                        </div>
                        <div className='current_price'>
                            <p className='precios'>$ {e.current_price}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
const mapStateToProps = (store) => {
    return {
        search: store.searchCryptos,
        search2: store.filtrados
    }
}


export default connect (mapStateToProps, {searchCoins})(Tabla)