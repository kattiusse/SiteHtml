<%@ page language="java" import="java.sql.*"  %>
<%

  // cria as variaveis
  // e obtem os dados digitados pelo usuario
  String vnome  = request.getParameter( "txtnome" ) ;
  Date vdatnasc  = request.getParameter( "txtnome" ) ;
  String vcpf  = request.getParameter( "txtnome" ) ;
  String vsexo  = request.getParameter( "txtnome" ) ;
  String vendereco  = request.getParameter( "txtnome" ) ;
  String vtelefone  = request.getParameter( "txtnome" ) ;
  String vemail  = request.getParameter( "txtnome" ) ;
  String vmensagem = request.getParameter( "txtidade" ) ;

  // mostra na tela as informa��es
  //
  out.print( "Nome: "  +  vnome + "<br>") ;
  out.print( "Idade: "  +  vidade + "<br>") ;
  out.print( "Email: "  +  vemail + "<br>") ;

  // cria as variaveis para conexao com o banco de dados
  //
  String driver = "net.sourceforge.jtds.jdbc.Driver" ;
  String url     = "jdbc:jtds:sqlserver://10.4.0.90:1433/bd201272019" ;
  String usuario = "bd201272019" ;
  String senha   = "123456" ;

  // carrega o driver na mem�ria
  //
  Class.forName(driver) ;

  // cria a conexao com o banco
  //
  Connection conexao = DriverManager.getConnection(url,usuario,senha);

  // prepara o comondo para inserir
  String sql = "INSERT INTO clientes (nome, sexo, aniversario, cpf, endereco, telefone, email, mensagem) VALUES ('" + vnome + "'," + vidade + ",'" + vemail + "')" ;

  // cria o objeto statement para executar
  // o comando do sql
  Statement stm = conexao.createStatement() ;


  // executa o comando do sql
  stm.executeUpdate(sql) ;


%>
