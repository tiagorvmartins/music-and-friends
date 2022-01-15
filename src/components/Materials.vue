<template>
    <v-container>
    <v-row no-gutters style="border-bottom: 5px solid #1976d2">
      <h1>Explore os seus materiais</h1>
    </v-row>

    <v-row no-gutters class="mt-6" style="background-color: #1976d2;padding: 36px 0;">
      <v-breadcrumbs
        style="background-color:#E0E0E0;padding:10px 20px;margin-left:30px;margin-right:30px;"
        :items="breadcrumbList"
        divider="/"
        ></v-breadcrumbs>
    </v-row>
    

    <v-row>
      <v-col cols="12" sm="12" md="4" v-for="v in breadItems" :key="v.text">
        <v-card>
          <v-img :src="v.image" contain height="200px"></v-img>

          <v-card-title>
            {{ v.text }}
          </v-card-title>

          <v-card-subtitle>
            {{ v.subtitle }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="#1976d2" :to="v.href"> Explorar </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    computed: {
        breadItems(){
            const breadcrumb = this.breadcrumbList;
            const lastItem = breadcrumb[breadcrumb.length - 1];            
            return this.items.filter(p => p.parent === lastItem.id);
        },
        breadcrumbList(){
            
            let list = [];
            const subsubid = this.breadcrumb(parseInt(this.$route.params.subsubid));
            if(subsubid){
                list.push(subsubid);
            }

            const subid = this.breadcrumb(parseInt(this.$route.params.subid));
            if(subid){
                list.push(subid);
            }

            const id = this.breadcrumb(parseInt(this.$route.params.id));
            
            if(id){
                list.push(id);
            }

            const root = this.breadcrumb(1);
            if(root){
                list.push(root);
            }

            return list.reverse();
        }
    },
    methods: {
        breadcrumb(id){
            if(!id){
                return null;
            }
            return this.items.find(p => p.id === id);            
        }
    },    
    data: () => ({            
      items: [
        {
          id: 1,
          parent: null,
          text: 'Todos materiais',
          disabled: false,
          href: '/materials',
        },
        {
          id: 2,
          parent: 1,
          text: 'Matematica A',
          subtitle: 'Aprende Matematica A com o Prof. Érico Reis!',          
          disabled: false,
          image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/164EE/production/_109347319_gettyimages-611195980.jpg',
          href: '/materials/2', /// /1/2/4
        },
        {
          id: 3,
          parent: 1,
          text: 'Matematica B',
          subtitle: 'Aprende Matematica B com o Prof. Érico Reis!',
          image: 'https://www.coc.com.br/api/images/res/700/350/blog/231/20190124131857677.jpg',
          disabled: false,
          href: '/materials/3',
        },
        {
          id: 4,
          parent: 2,
          text: 'Curso Completo MAT',
          subtitle: 'Aquele curso que tanto precisavas!!!',
          image: 'https://juliobattisti.com.br/loja/imgscp/CONL000214r.jpg',
          disabled: false,
          href: '/materials/2/4',
        },
        {
          id: 5,
          parent: 4,
          text: 'Álgebra',
          disabled: false,
          subtitle: 'Aquela disciplina que tiveste 9 valores e precisaste de repetir!',
          image: 'https://media.gcflearnfree.org/content/5d389e26e96a441bf8c2adb4_07_24_2019/Nomenclatura-algebra.jpg',
          href: '/materials/2/4/5',
        },
        {
          id: 6,
          parent: 4,
          text: 'Trigonometria',
          subtitle: 'As fantástiacs correlações entre Triangulos e circulos.',
          image: 'https://static.todamateria.com.br/upload/53/61/5361676d0e59d-trigonometria.jpg?auto_optimize=low',
          disabled: false,
          href: '/materials/2/4/6',
        },
      ]
    }),
  }
</script>
