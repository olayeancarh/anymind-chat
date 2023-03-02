import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatReadmoreButtonComponent } from './chat-readmore-button.component';

describe('ChatReadmoreButtonComponent', () => {
  let component: ChatReadmoreButtonComponent;
  let fixture: ComponentFixture<ChatReadmoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatReadmoreButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatReadmoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
