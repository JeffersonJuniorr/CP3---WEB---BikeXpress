import './Produtos.css'; 

const products = [
    { id: 1, name: 'Bike 01', image: '/assets/bike01.png', preço: 200, position: 'top' },
    { id: 2, name: 'Bike 02', image: '/assets/bike02.png', preço: 200, position: 'middle'},
    { id: 3, name: 'Bike 03', image: '/assets/bike03.png', preço: 200, position: 'middle'},
    { id: 4, name: 'Bike 04', image: '/assets/bike04.png', preço: 200, position: 'bottom'},
];

function Produtos() {
    return (
        <>
            <div className="product-container">
            <h1 className="page-title">Bicicletas disponiveís para compra</h1>
                <div className="left-column">
                    <div className="product">
                        <img src="/assets/bike01.png" alt="Bike 01" />
                        <h2>Bike 01</h2>
                        <p>Preço: R${products[0].preço.toFixed(2).replace('.', ',')}</p>
                        <div className="arrow-circle">
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>
                <div className="middle-column">
                    <div className="product middle">
                        <img src="/assets/bike02.png" alt="Bike 02" />
                        <h2>Bike 02</h2>
                        <p>Preço: R${products[1].preço.toFixed(2).replace('.', ',')}</p>
                        <div className="arrow-circle">
                            <div className="arrow"></div>
                        </div>
                    </div>
                    <div className="product middle">
                        <img src="/assets/bike03.png" alt="Bike 03" />
                        <h2>Bike 03</h2>
                        <p>Preço: R${products[2].preço.toFixed(2).replace('.', ',')}</p>
                        <div className="arrow-circle">
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="product">
                        <img src="/assets/bike04.png" alt="Bike 04" />
                        <h2>Bike 04</h2>
                        <p>Preço: R${products[3].preço.toFixed(2).replace('.', ',')}</p>
                        <div className="arrow-circle">
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Produtos;