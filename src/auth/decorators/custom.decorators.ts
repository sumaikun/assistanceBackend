import { createParamDecorator, ExecutionContext } from '@nestjs/common';



export const AccessToken = createParamDecorator((_, request: any) => {    
    
    const header = request.switchToHttp().getNext().req.headers.authorization

    const token =  header.replace("Bearer ","");

    return token

  });
  
 