--MaxSQL version 1.0.0.1   21-nov-2017
--Developed by Jonathan de Blok / jdbgraphics.nl
--Free for all types of use but please use proper credits and leave these comment lines intact.

--v1.0.0.2
--fixed small comparison operator bug found Julien Confalonierie  

--v1.0.0.1
--fixed bug with instanced nodes found by Nick Moutafis

--v1.0 initial release

struct maxSQL
(
    private

		--get all recusive subanims  
		fn recursive_find_subanim  sa out =
		(
			if (classof sa == subanim) do
			(
				for i=1 to sa.numSubs  do (
					if (classof sa[1] == subanim) do
					(
						appendifunique out sa[i]
						out  = recursive_find_subanim sa[i] out
					)
				)
			)
			out
		),
			
		--check is an instance is an extenson of cls
		fn InheretedClassOf inst cls =
		(
			out=false;
			tmp= classof inst
			
		 
			while (classof tmp != Value AND  classof tmp != MaxWrapper ) do
			( 
				if (classof tmp == cls ) do ( out = true  )
				tmp=classof tmp
			)
			
			out
		),
		
		--
        fn recursive_find_inherted_classes _class _trg out =
        (
            items = refs.dependson _trg
		 
			if (items!=undefined) do
			(
				for item in items do
				(
					tmp=classof item
					while (classof tmp != Value AND  classof tmp != MaxWrapper ) do
					(
						if (classof tmp == _class ) do ( append out item;   )
						tmp=classof tmp
					)
					 out  = this.recursive_find_inherted_classes _class item out
				)
			)
            out
        ),

		--same as getClassIntances but taking into account  inhereted classes	
        fn getInheretedClassInstances _class target:false = ( this.recursive_find_inherted_classes _class target #() ),
		
		fn strToProp  item str =
		( 
			props=filterString  str  "."
			tmp=item
 
			for p in props do
			(  
				if (isproperty tmp p ) then								(
					tmp = (getproperty tmp p)
				) else 
				(
					tmp=unsupplied;
				)
			)
			tmp
		),
	 

    public
        _select = false,
        _from = #(),
        _where,
        _order = #(),
        _set,
        _result =#(),
		_on=#(),


        verbose = false,
        fn debug msg = ( if this.verbose do print msg ),

        fn _run _select:this._select _from:this._from  _where:this._where  _order:this._order  _set:this._set _on:this._on nocache:false =
        (
			-- note:   this._where  !=  _where   etc
            if (_where == undefined) then ( _where = fn __ item = (true); )
			
			if (classof _where == Array) do
			(
				-- _where is  maxscript function
				if (classof _where[2] == MAXScriptFunction ) then
				(
 					_where =  (fn __ item items: i: str:this =
										(
											prop =  str.strToProp item str._where[1];
										 
											if (prop != unsupplied ) then ( str._where[2] prop  item:item items:items i:i ) else ( false )
										)
									)
				) else
				(
					-- _where is a #(propertyname, fn)  combination
					_where =  (fn __ item items: i:  str:this  =
										(
											prop = str.strToProp item str._where[1]  
											case of
											(
												( str._where[3] == "!=" )  : (  prop  != str._where[2]  )
												( str._where[3] == ">" )  : (   prop   > str._where[2]  )
												( str._where[3] == "<" )  : (   prop  < str._where[2]  )
												( str._where[3] == "<=" )  : (   prop   <= str._where[2]  )
												( str._where[3] == ">=" )  : (   prop  >= str._where[2]  )
												( prop == unsupplied) : ( false )
												 default :  prop   == str._where[2];
											)
										)
									)   
				)
			)
 
			--preprocessing input data to uniform arrays
            if (classof _from == subanim) do ( _from = this.recursive_find_subanim _from #(); )  -- get all nested sub anims.	
			if (classof _from == Objectset) do (_from =_from as array)
			if (classof _from == Maxscriptfunction ) do (_from = this._from() )
			if (classof _from != array) do (_from=#(_from))

			if (classof _select != Array )  do ( _select = #(_select))	
			if (classof _on != Array )  do ( _on = #(_on))	

			if (_on.count==0) do (_on[1]=false)
				
            -- select requested items
            collection= #();

            cnt=0;

            for sel in _select do
            (
                for src  in _from do
                (
                    items = #()
					
					for onProp in _on do
					(
						skip = false
						
						if onProp !=false do
						( 
							prop = this.strToProp src onProp
							if (prop!=unsupplied ) do (src=prop) 
						)
		 
						if (not skip) then (
							case of
							(
								( classof sel == ObjectSet )  : ( items = src )     
								
								( isProperty sel "creatable" == false ) :	
								(
									items = this.getInheretedClassInstances sel target:src;
									if (iskindof src sel) do (appendifunique items src)											 
								)   
								   
								default:
								( 
									if classof src == sel then (appendifunique items src ) else ( items =  getClassInstances sel  target:src; )
								)                                                                          
							)  
							
							--Perform  _where clause
							for item in items where ( _where item items:items _from:src _select:sel  i:cnt; )  do ( if (appendifunique collection item; ) do ( cnt+=1 );  )
						) 
					)
                )
            )
			
 

            --Order items
            if (_order.count > 0) do
            (
                if (_order[2]==#desc) then ( _order[2] = 1 ) else (_order[2]=-1)

                qsort collection (
                    fn __ item1  item2 data: =
					(
						a=data[1].strToProp item1 data[2][1]
						b=data[1].strToProp item2 data[2][1]
						
						if (a == unsupplied and b != unsupplied) do ( return data[2][2] )
						if (b == unsupplied and a != unsupplied) do ( return data[2][2]*-1 )
                        if ( a==b )  do ( return 0 );
                        if ( a>b ) do ( return -1*data[2][2] )

                        return 1*data[2][2]
                    )
                ) data:#(this, _order);
            )

            --set properties
            if (_set !=undefined) do
            (
                for i = 1 to collection.count do ( _set collection[i] items:collection i:i )
            )

            --if allowed cache the latest result in the struct
            if (not nocache ) do (this._result = collection)

            collection
        )
)


/*
--select same vertex count as selected object
q=maxSQL()
q._select= Editable_mesh
q._from = objects
q._where =  (fn __ item = ( return item.numverts == $.numverts  ))
r=q._run()
select r
*/
 