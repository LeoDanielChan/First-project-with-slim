<?php
namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response ;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class DivisaController {
    function index (Request $request, Response $response, array $args) {
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $view = Twig::fromRequest($request);
            $params = ['titulo' => 'Divisa'];
            return $view->render($response,'divisa.html',$params);
        }

        
    }
}

?>