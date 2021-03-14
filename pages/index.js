function HomePage() {
    return(
        <section style={{
            position:'absolute', 
            top:'0', 
            left:'0', 
            width: '100%', 
            height: '100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#fafafa'
        }}>
            <h1 style={{
                width:'80%',
                fontFamily:'sans-serif',
                textAlign:'center'
            }}>
                Para baixar nossos conteúdos, acesse a Biblioteca Little Son
            </h1>
            <div style={{
                width:'80%',
                fontFamily:'sans-serif',
                fontWeight:'bold',
                textAlign:'center'
            }}>
                <a style={{
                    fontSize:'18px',
                    color:'#52A6E7',
                    textDecoration:'none'
                }} href="https://littleson.com.br/biblioteca/" title="Biblioteca Little Son">
                    &#8592; Ir para a Biblioteca Little Son
                </a>
            </div>
        </section>
    )
  }
  
  export default HomePage