<?php
namespace App\Controllers;

use App\Models\Formularios;
use Psr\Http\Message\ResponseInterface as Response ;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;



class InicioController {
    function index (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $view = Twig::fromRequest($request);
            $forms = Formularios::get();
            $params = ['titulo' => 'Inicio', 'formularios' => $forms];
            return $view->render($response,'inicio.html',$params);
        }

        
    }

    function actualizar (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $data = $request->getParsedBody();
            $id = $args['id'];
            $view = Twig::fromRequest($request);
            $user = Formularios::Where('id_formulario',$id)->get();
            $params = ['titulo' => 'Actualizar informe', 'formulario' => $user];
            return $view->render($response,'actualizarInfor.html',$params);
        }
    }

    //No sirve
    function confirActua (Request $request, Response $response, array $args){
        $data = $request->getParsedBody();
        $id = $data['id_formulario'];
        $resultado = Formularios::find($id);
        $resultado->fecha = $data['fecha'];
        $resultado->involucrados = $data['involucrados'];
        $resultado->motivo = $data['motivo'];
        $resultado->descripcion = $data['descripcion'];
        $resultado->save();
        return $response ->withHeader('Location','http://localhost/projectFinal/inicio')->withStatus(302);
    }
    //
    function eliminar (Request $request, Response $response, array $args) {
        $id = $args['id'];
        $user = Formularios::Where('id_formulario','=',$id)->delete();
        return $response ->withHeader('Location','http://localhost/projectFinal/inicio')->withStatus(302);
    }

    function vista(Request $request, Response $response, array $args) {
        $view = Twig::fromRequest($request);
        $id = $args['id'];
        $user = Formularios::Where('id_formulario','=',$id)->get();
        $params = ['titulo' => 'Informe', 'formulario' => $user];
        return $view->render($response,'vistainfo.html',$params);
    }
}

?>