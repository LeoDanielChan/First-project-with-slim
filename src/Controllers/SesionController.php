<?php
namespace App\Controllers;

use App\Models\Usuarios;
use Psr\Http\Message\ResponseInterface as Response ;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class SesionController {
    function index (Request $request, Response $response, array $args) {
        $view = Twig::fromRequest($request);
        $params = ['titulo' => 'Iniciar sesión'];
        return $view->render($response,'sesion.html',$params);
    }

    function iniciar (Request $request, Response $response, array $args) {
        $data = $request->getParsedBody();
        $user = $data['user'];
        $contraseña = $data['contraseña'];

        $usuario = Usuarios::where('name_user', $user)->where('contraseña', $contraseña)->get();
        
        if ($usuario == null) {
            $response = $response->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        } else {
            session_start();
            
            $_SESSION['usuario'] = [
                'nombre' => $usuario[0]['nombre'],
                'apellido_paterno' => $usuario[0]['apellido_paterno'],
                'apellido_materno' => $usuario[0]['apellido_materno'],
                'correo' => $usuario[0]['correo'],
                'telefono' => $usuario[0]['telefono'],
                'puesto_de_trabajo' => $usuario[0]['puesto_de_trabajo']
            ];

            $response = $response->withHeader('Location','http://localhost/projectFinal/inicio')->withStatus(302);
        }

        return $response;
    }
    
    function cerrar (Request $request, Response $response, array $args){
        session_start();
        session_destroy();
        $_SESSION['usuario'] = null;

        // Redirigir al usuario a la página de inicio de sesión
        return $response->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
    }

    function registrarse (Request $request, Response $response, array $args) {
        $view = Twig::fromRequest($request);
        $params = ['titulo' => 'Registrate'];
        return $view->render($response,'registrarse.html',$params);
    }

    function confirmar (Request $request, Response $response, array $args){
        $datos = $request->getParsedBody();
        $user = new Usuarios();
        $user->nombre = $datos['nombre'];
        $user->apellido_paterno = $datos['apellido_paterno'];
        $user->apellido_materno = $datos['apellido_materno'];
        $user->name_user = $datos['name_user'];
        $user->correo = $datos['correo'];
        $user->telefono = $datos['telefono'];
        $user->puesto_de_trabajo = $datos['puesto_de_trabajo'];
        $user->id_tipo_de_usuario = $datos['tipo_user'];
        $user->contraseña = $datos['contraseña'];
        $user->id_area = $datos['area'];
        $user->save();

        return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
    }

    function verPerfil (Request $request, Response $response, array $args){
        session_start();
        if(!isset($_SESSION['usuario'])){
            return $response ->withHeader('Location','http://localhost/projectFinal/')->withStatus(302);
        }{
            $consul = $_SESSION['usuario'];
            
            $view = Twig::fromRequest($request);
            $params = ['titulo' => 'Perfil', 'perfil' => $consul];
            return $view->render($response,'perfil.html',$params);
        }
    }
}

?>