include <helper.scad>

ir = 17.5/2;
or = 12;
r = ir + or;
h = 25 + 12.5;
diff_r = 40;
lip_r = 1;
base_r = missing_leg(diff_r, diff_r - h + 2*lip_r);
width = 360;
depth = 37;
string = "An Andrew Phung Design|04/10/24";
string2 = "For Minh";
angle = 8;

function surface_f(i, j) = 
    let(x1 = norm([i - width/2, j]))
    let(x2 = norm([i, j - depth]))
    let(x3 = norm([i - width, j - depth]))
    let(sigma = 100)
    5*cos(10*x1)*exp(-.5*pow(x1/sigma, 2)) +
    5*cos(10*x2)*exp(-.5*pow(x2/sigma, 2)) +
    5*cos(10*x3)*exp(-.5*pow(x3/sigma, 2)) + 
    50 - 40*(sqrd((j - depth/2)/depth));

module interface(screw_thread_offset = 0, include_exit_hole = true, wall_thick = .5){
    up(-12.5) diff(){
        union(){
            intersection(){
                rotate_extrude() at(12.5 + ir) circle(12.5);
                cyl(12.5, or + ir);
            }
            diff(){
                up(-25) cyl(25, or + ir);
                up(-26) cyl(27, ir);
            }
            up(-25) diff(){
				union(){
					children(0);
					up(47 + h - screw_thread_offset) diff(){
						ScrewThread(2*(65/2 + 5), 10, tooth_angle = 45);
						up(-.001) text_circle(28, 32, ["An Andrew Phung Lamp", "For Minh", "04/13/2024"], font = "Consolas");
					}
					cyl(47 + h, r + wall_thick);
				}
                cyl(200, r);
            }
        }
        at(-26/2, -20.5/2, -40) box(26, 20.5, 55, 2);
		if (include_exit_hole){
			up(-25 + 3.5) cyl(diff_r + r + lip_r + 1, 2.75, dir_y = 1);
			at(-3.5/2, 0, -25 - .001) box(3.5, diff_r + r + lip_r + 1, 3.5);
		}
    }
}

module wrapping(){
    up(-2*lip_r) diff(){
        cyl(h - 2*lip_r, r + base_r);
        up(diff_r) rotate_extrude() at(r + base_r) circle(diff_r);
        cyl(h, r);
    }
    up(lip_r) rotate_extrude() at(r + base_r) circle(lip_r);
    cyl(2*lip_r, r + base_r);
}

module wrapping2(){
    diff(){
        wrap_surface(width, depth);
        cyl(h, r);
    }
}

module wrapping3(){
    diff(){
        up(h/2) rotate_extrude() at(h/2 + .01) circle(h/2);
        cyl(h, r);
    }
}

module wrapping4(){
    up(15) cyl(45 + h - 15, r + .5, 3, invert_top = true, invert_bottom = true);
    at(-50, -50) box(100, 100, 15, 3);
}

module wrapping5(){
    base_r = 39;
    x = 45 + h;
    y = base_r - r - .5;
    diff_r = (pow(x, 2) + pow(y, 2))/(2*y);
    $fn = 180;
    diff(){
        cyl(x, base_r);
        rotate_extrude() at(r + diff_r + .5, x) circle(diff_r);
    }
}

module wrapping6(){
    base_r = 39;
    y = base_r - r - .5;
    x = 47 + h - y;
    
    diff_r = (pow(x, 2) + pow(y, 2))/(2*y);
    $fn = 180;
    diff(){
        up(y) cyl(x, base_r);
        rotate_extrude() at(r + diff_r + .5, x + y) circle(diff_r);
    }
    keep(zMax = y) rotate_extrude() at(y - base_r, y) circle(y);
}

module wrapping7(){
    base_r = 39;
    y = base_r - r - .5;
    x = 47 + h - y;
    
    diff_r = (pow(x, 2) + pow(y, 2))/(2*y);
    $fn = 180;
    diff(){
        up(y) cyl(x, base_r);
        rotate_extrude() at(r + diff_r + .5, x + y) circle(diff_r);
    }
    keep(zMax = y) rotate_extrude() at(y - base_r, y) circle(y);
    up(x + y) ScrewThread(2*(r + 5), 10, tooth_angle = 45);
}

module wrapping8(){
    base_r = 39;
    y = base_r - r - .5;
    x = 47 + h;
    diff_r = (pow(x, 2) + pow(y, 2))/(2*y);
    $fn = 180;
    diff(){
        cyl(x, base_r);
        rotate_extrude() at(r + diff_r + .5, x) circle(diff_r);
    }
    up(x) ScrewThread(2*(r + 5), 10, tooth_angle = 45);
}

module wrapping9(){
    x = 47 + h;
    xy_list = [for (i = [0:20]) [-25 + i*2.5, i % 2 == 0 ? 0 : 1], for (i = [20:-1:0]) [-25 + i*2.5, 50 - (i % 2 == 0 ? 0 : 1)]];
    r_list = [for (i = [0:len(xy_list) - 1]) 1];
    at(0, 25, x - 25) rotate([90, 0, 0]) rotate_extrude(angle = 180) filet_polygon(xy_list, r_list);
    at(0, -25) linear_extrude(x - 25) polygon(points = [for (i = [0:len(xy_list) - 1]) for (a = gen_corner_points(xy_list, r_list, i)) a]);
    cyl(x, r + .5);
    r2 = 65/2;
    up(x) ScrewThread(2*(r2 + 5), 10, tooth_angle = 45);
    
}

module wrapping10(){
    x = 47 + h;
    scale([.5, .5, 1]) keep(zMin = 0) rotate([90, 0, 0]) rotate_extrude() polygon(points = [for (i = [-90:90]) [(x + 2.5*cos(20*i))*cos(i), (x + 2.55*cos(20*i))*sin(i)]]);
}

module wrapping11(){
    x = 47 + h;
    y = x - 2*39;
    up(y) scale([.5, .5, 1.3]) keep(zMin = 0) sphere(2*39);
    up(y) hull() rotate_extrude() at(39 - y) circle(y);
}

module wrapping12(){
    x = 47 + h;
    scale([1, 1, 4/3]) up(x/4) keep(zMin = -x/4) rotate([0, 90, 45]) rotate([0, 0, 45]) scale([.5, .5, .5]){
        diff(){
            rotate([90, 0, 0]) rotate_extrude() polygon(points = [for (i = [-90:90]) [(x - 2*cos(20*i))*cos(i), (x - 2*cos(20*i))*sin(i)]]);
            up(-100) cyl(100, 100);
        }
        diff(){
            keep(zMax = 0) rotate([0, 90, 0]) rotate_extrude() polygon(points = [for (i = [-90:90]) [(x - 2*cos(20*i))*cos(i), (x - 2*cos(20*i))*sin(i)]]);
            cyl(100, 100);
        }
    }
}

module lamp_base(){
    rotate(180*Z) interface(30){
        sphere(1);
    }
}

x = 47 + h;
$fn = 180;
//up(45) cyl(250, 52.5);
//cyl(50, r);
up(37.5) lamp_base();
//wrapping11();
//wrapping12();