import '../CSS/style.css';

function Counter(){
    return(
         <section className="counters">
        <div className="container">
          <div>
            <i className="far fa-clock fa-4x" />
            <div className="counter" data-target={480}>2000+</div>
            <h3>Working Hours</h3>
          </div>
          <div>
            <i className="fas fa-gift fa-4x" />
            <div className="counter" data-target={10}>15+</div>
            <h3>Completed Projects</h3>
          </div>
          <div>
            <i className="fas fa-users fa-4x" />
            <div className="counter" data-target={5}>20+</div>
            <h3>Happy Clients</h3>
          </div>
          <div>
            <i className="fas fa-award fa-4x" />
            <div className="counter" data-target={12}>50+</div>
            <h3>People Associated</h3>
          </div>
        </div>
      </section>
    )
}
export default Counter;