<?php
namespace App\Controllers;

use App\Models\Proveedores;
use Psr\Http\Message\ResponseInterface as Response ;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;


class ProveedoresController {
    function index (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $view = Twig::fromRequest($request);
            $forms = Proveedores::get();
            $params = ['titulo' => 'Proveedores', 'proveedores' => $forms];
            return $view->render($response,'proveedores.html',$params);
        }
    }

    function nuevo (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $view = Twig::fromRequest($request);
            $params = ['titulo' => 'Nuevo Proveedor'];
            return $view->render($response,'nuevoProveedor.html',$params);
        }
    }

    function confirmar (Request $request, Response $response, array $args){
        $datos = $request->getParsedBody();
        $prove = new Proveedores();
        $prove->nombre = $datos['name_pro'];
        $prove->servicio = $datos['service'];
        $prove->contacto = $datos['contacto'];
        $prove->logo = $datos['logo'];
        $prove->id_forma_de_pago = $datos['metodo_de_pago'];
        $prove->save();

        return $response ->withHeader('Location','http://localhost/projectFinal/proveedores')->withStatus(302);
    }

    function eliminar (Request $request, Response $response, array $args) {
        $datos = $request->getParsedBody();
        $id = $args['id'];
        $user = Proveedores::Where('id_proveedor','=',$id)->delete();
        return $response ->withHeader('Location','http://localhost/projectFinal/proveedores')->withStatus(302);
    }

    function actualizar (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $data = $request->getParsedBody();
            $id = $args['id'];
            $view = Twig::fromRequest($request);
            $user = Proveedores::Where('id_proveedor',$id)->get();
            $params = ['titulo' => 'Actualizar proveedor', 'proveedor' => $user];
            return $view->render($response,'modificarProveedor.html',$params);
        }
    }

    function confirActua (Request $request, Response $response, array $args){
        $data = $request->getParsedBody();
        $id = $data['id_proveedor'];
        $resultado = Proveedores::find($id);
        $resultado->nombre = $data['name_pro'];
        $resultado->servicio = $data['service'];
        $resultado->contacto = $data['contacto'];
        $resultado->logo = $data['logo'];
        $resultado->id_forma_de_pago = $data['metodo_de_pago'];
        $resultado->save();
        return $response ->withHeader('Location','http://localhost/projectFinal/proveedores')->withStatus(302);
    }
}

?>