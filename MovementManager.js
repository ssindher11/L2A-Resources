// -----JS CODE-----
// @input float floatSpeed = 1.0 {"widget": "slider", "min": 0, "max": 5, "step": 0.01}
// @input float range = 10.0 {"widget": "slider", "min": 0, "max": 30, "step": 0.01}
// @input float rotSpeed = 0.5 {"widget": "slider", "min": 0, "max": 1, "step": 0.01}

var transform = script.getTransform();
var newY = Math.sin(getTime() * script.floatSpeed) * script.range;
transform.setLocalPosition(new vec3(0, newY, 0));

var rotation = transform.getLocalRotation();
var rotateBy = quat.angleAxis(Math.PI * getDeltaTime() * script.rotSpeed, vec3.up());
rotation = rotation.multiply(rotateBy);
transform.setLocalRotation(rotation);
