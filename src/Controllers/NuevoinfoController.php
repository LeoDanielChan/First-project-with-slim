<?php
namespace App\Controllers;

use App\Models\Formularios;
use Psr\Http\Message\ResponseInterface as Response ;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;


class NuevoinfoController {
    function index (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $view = Twig::fromRequest($request);
            $params = ['titulo' => 'Nuevo informe'];
            return $view->render($response,'informe.html',$params);
        }
    }

    function crear (Request $request, Response $response, array $args) {
        $datos = $request->getParsedBody();
        $informe = new Formularios();
        $informe->motivo = $datos['motivo'];
        $informe->descripcion = $datos['descripcion'];
        $informe->involucrados = $datos['involucrados'];
        $informe->fecha = $datos['fecha'];
        $informe->save();
        return $response ->withHeader('Location','http://localhost/projectFinal/inicio')->withStatus(302);
    }
}

?>