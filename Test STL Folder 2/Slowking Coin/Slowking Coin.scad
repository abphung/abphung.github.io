include <helper.scad>

height = 3;
scale_factor = 1;
image_width = 705/scale_factor;
image_height = 800/scale_factor;
coin_r = 13;
framing_y_offset = 1*coin_r;
framing_x_offset = -.1*coin_r;
image_depth = .5;

union(){
	intersection(){
		scale([2*coin_r/image_width, 2*coin_r/image_width, .01*height]) {
			//surface("/Users/andrewphung/Downloads/pokemon-coloring-pages-537-2.png");
			//surface("/Users/andrewphung/Downloads/Eevee-Simple-2.png");
			surface("/Users/andrewphung/Downloads/zorua.png");
		}
		at(coin_r + framing_x_offset, framing_y_offset, height - image_depth) cyl(image_depth, coin_r - .75);
	}
	at(coin_r + framing_x_offset, framing_y_offset, height - image_depth) diff(){
		cyl(image_depth, coin_r - .75);
		cyl(image_depth, coin_r - 1.25);
	}
}
at(coin_r + framing_x_offset, framing_y_offset, 0) cyl(height - image_depth, coin_r, .75);

//scale([2*coin_r/image_width, 2*coin_r/image_width, .01*height]) {
//			//surface("/Users/andrewphung/Downloads/pokemon-coloring-pages-537-2.png");
//			surface("/Users/andrewphung/Downloads/Ceruledge-Pokemon-2.png");
//		}
