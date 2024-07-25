<?php
namespace App\Controllers;

use App\Models\Clientes;
use Psr\Http\Message\ResponseInterface as Response ;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;


class ClientesController {
    function index (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $view = Twig::fromRequest($request);
            $forms = Clientes::get();
            $params = ['titulo' => 'Clientes', 'clientes' => $forms];
            return $view->render($response,'clientes.html',$params);
        }
    }

    function nuevo (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $view = Twig::fromRequest($request);
            $params = ['titulo' => 'Nuevo cliente'];
            return $view->render($response,'nuevoCliente.html',$params);
        }
    }

    function confirmar (Request $request, Response $response, array $args){
        $datos = $request->getParsedBody();
        $prove = new Clientes();
        $prove->nombre = $datos['name_clie'];
        $prove->servicio = $datos['service'];
        $prove->contacto = $datos['contacto'];
        $prove->logo = $datos['logo'];
        $prove->id_forma_de_pago = $datos['metodo_de_pago'];
        $prove->save();

        return $response ->withHeader('Location','http://localhost/projectFinal/clientes')->withStatus(302);
    }

    function eliminar (Request $request, Response $response, array $args) {
        $datos = $request->getParsedBody();
        $id = $args['id'];
        $user = Clientes::Where('id_cliente','=',$id)->delete();
        return $response ->withHeader('Location','http://localhost/projectFinal/clientes')->withStatus(302);
    }

    function actualizar (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $data = $request->getParsedBody();
            $id = $args['id'];
            $view = Twig::fromRequest($request);
            $user = Clientes::Where('id_cliente',$id)->get();
            $params = ['titulo' => 'Actualizar cliente', 'cliente' => $user];
            return $view->render($response,'modificarCliente.html',$params);
        }
    }

    function confirActua (Request $request, Response $response, array $args){
        $data = $request->getParsedBody();
        $id = $data['id_cliente'];
        $resultado = Clientes::find($id);
        $resultado->nombre = $data['name_clie'];
        $resultado->servicio = $data['service'];
        $resultado->contacto = $data['contacto'];
        $resultado->logo = $data['logo'];
        $resultado->id_forma_de_pago = $data['metodo_de_pago'];
        $resultado->save();
        return $response ->withHeader('Location','http://localhost/projectFinal/clientes')->withStatus(302);
    }
}

?>