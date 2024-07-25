<?php
use App\Models\Usuarios;
use Slim\Factory\AppFactory;
use App\Controllers\SesionController;
use App\Controllers\InicioController;
use App\Controllers\ClientesController;
use App\Controllers\ProveedoresController;
use App\Controllers\NuevoinfoController;
use App\Controllers\DivisaController;
use Psr\Http\Message\ResponseInterface as Response ;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;
use App\Models\Formularios;

require __DIR__ . "/vendor/autoload.php";

//Conexión con la BASE DE DATOS "bd_expro"
$capsule = new \Illuminate\Database\Capsule\Manager;
$capsule->addConnection([
    "driver" => "mysql",
    "host"=> "127.0.0.1",
    "port" => "3306",
    "username"=> "root", //nombre de usuario
    "password"=> "", //contraseña
    "database"=> "bd_expro", //base de datos
    "charsert"=> "utf8",
    "collation"=> "utf8_general_ci",
    "prefix"=> ""
]);

//Hacer globar el capsule
$capsule->setAsGlobal();
//carga el capsule a eloquent
$capsule->bootEloquent();

$app = AppFactory::create();
$twig = Twig::create('Templates', ['cache' => false]);
$app ->add(TwigMiddleware::create($app,$twig));
$app->setBasePath('/projectFinal');

//Rutas principales
$app->get('/', SesionController::class . ':index');

$app->get('/inicio', InicioController::class . ':index');

$app->get('/clientes', ClientesController::class . ':index');

$app->get('/proveedores', ProveedoresController::class . ':index');

$app->get('/informe', NuevoinfoController :: class . ':index');

$app->get('/divisa', DivisaController :: class . ':index');


//Rutas secundarias del InicioController
$app->get('/eliminarInfor/{id}', InicioController::class . ':eliminar');
$app->get('/actualizarInfor{id}', InicioController::class . ':actualizar');
$app->post('/actualizarInforme', InicioController::class . ':confirActua');
$app->get('/vistaDeInforme{id}', InicioController::class . ':vista');

//Ruta secundaria de NuevoinfoController
$app->post('/creaInforme', NuevoinfoController::class . ':crear');

//Ruta secundaria de SesionController
$app->post('/iniciarSesion', SesionController::class . ':iniciar');
$app->get('/nuevoUsuario', SesionController::class . ':registrarse');
$app->post('/confirmacion', SesionController::class . ':confirmar');
$app->get('/cerrarSesion', SesionController::class . ':cerrar');
$app->get('/perfil', SesionController::class . ':verPerfil');

//Ruta secundaria de ProveedoresController
$app->get('/nuevoProveedor', ProveedoresController::class . ':nuevo');
$app->post('/confirmarProveedor', ProveedoresController::class . ':confirmar');
$app->get('/eliminarProveedor{id}', ProveedoresController::class . ':eliminar');
$app->get('/actualizarProveedor{id}', ProveedoresController::class . ':actualizar');
$app->post('/actualizarProvee', ProveedoresController::class . ':confirActua');

//Ruta secundaria de ClientesController
$app->get('/nuevoCliente', ClientesController::class . ':nuevo');
$app->post('/confirmarCliente', ClientesController::class . ':confirmar');
$app->get('/eliminarCliente{id}', ClientesController::class . ':eliminar');
$app->get('/actualizarCliente{id}', ClientesController::class . ':actualizar');
$app->post('/actualizarClie', ClientesController::class . ':confirActua');

$app->run();

?>