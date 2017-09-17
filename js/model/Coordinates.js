function Gitter(Nx,Ny){
    this.Nx = Nx;
    this.Ny = Ny;

    console.log("init Coordinates");
    console.log(Nx,Ny)

    this.neighbors_even = [[0,2], [-1,1], [-1,-1], [0,-2], [0,-1], [0,1]];
    this.neighbors_odd = [[0,2], [0,1], [0,-1], [0,-2], [1,-1], [1,1]];
}

Gitter.prototype.add_vectors = function (a,b) {
    // a and b have to have same length for this to make sense
	if (a.length != b.length) { return 0; }
	var result = [];
	for (var i = 0; i < a.length; i++) {
		result.push(a[i] + b[i]);
	}
	return result;
};


Gitter.prototype.general_periodic_boundary = function(a, N0, N1) {
    // map vector a on the allowed plane
	while (a[0] < 0) { a[0] = a[0] + N0; }
	while (a[1] < 0) { a[1] = a[1] + N1; }
	a[0] = a[0] % N0;
	a[1] = a[1] % N1;
	return a;
};

Gitter.prototype.periodic_boundary = function (a){
  return this.general_periodic_boundary(a,this.Nx,this.Ny);
};


Gitter.prototype.getAllNeighbors = function(x,y) {
	is_odd = y % 2;
	var curr_neigh;
	var neighborList = [];

	if (is_odd) {
		for (var i=0; i<6; i++) {
			curr_neigh = this.add_vectors([x, y], this.neighbors_odd[i]);
			curr_neigh = this.periodic_boundary(curr_neigh);
			neighborList.push(curr_neigh);
		}
	} else {
		for (var i=0; i<6; i++) {
			curr_neigh = this.add_vectors([x, y], this.neighbors_even[i]);
			curr_neigh = this.periodic_boundary(curr_neigh);
			neighborList.push(curr_neigh);
		}
	}

	return neighborList;
};

