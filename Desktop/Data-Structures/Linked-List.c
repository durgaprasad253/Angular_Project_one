#include<stdio.h>
#include<stdlib.h>




int main()
{

    struct node
{
    int data;
    struct node*link;
};

    struct node *head = 0,*newnode,*temp;
    int n;

    printf("Enter the number of nodes to be created:");
    scanf("%d",&n);

    for(int i=1;i<=n;i++)
    {
        
        newnode = (struct node *) malloc(sizeof(struct node));

        


             if(head != 0 )
            { 
                temp->data = 2;
                temp->link = newnode;
                temp = newnode;
            
            }

           

            if(head == 0)
            {
                
                head = newnode;
                temp = newnode;    
                
            }

            
            if(i == n)
            {
                temp->data = 2;
                temp->link = NULL;
            }

           
            
            

    }

    int i=1;
    temp = head;
    printf("HEAD : %d\n",head);
    
    do
    {
        
        printf("NODE %d\n",i);
        printf("NODE data: %d\n",temp->data);
        printf("NOde link: %d \n",temp->link);
        temp = temp->link;
        i++;
    } while (temp != NULL);
    
    
    

     
}
