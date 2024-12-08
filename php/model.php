<?php
class Tarea {
    private $id;
    private $nombre;
    private $estado;

    public function __construct($id, $nombre, $estado) {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->estado = $estado;
    }

    public function getId() {
        return $this->id;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function isCompletada() {
        return $this->estado;
    }

    public function completar() {
        $this->estado = true;
    }
}
?>


