import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWrapperTextareaComponent } from './chat-wrapper-textarea.component';

describe('ChatWrapperTextareaComponent', () => {
  let component: ChatWrapperTextareaComponent;
  let fixture: ComponentFixture<ChatWrapperTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWrapperTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWrapperTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
